from manim import *


def create_vmob_from_complex_numbers(complex_points):
        real_points = list(map(complex_to_R3, complex_points))
        return VMobject().set_points_as_corners([real_points[-1], *real_points])

class FourierEpicyclesMobjectFFT(VMobject):
    def __init__(
            self,
            path: VMobject,
            num_coefs=None,
            speed_factor=1.,
            scale_factor=4,
            # epicycles parameters
            circles_color=RED,
            circles_width=1,
            circles_opacity=1,
            vectors_color=WHITE,
            vectors_width=4,
            vectors_opacity=1,
            # background shape parameters
            bg_shape_color=GRAY_C,
            bg_shape_stroke_width=1,
            bg_shape_opacity=1,
            # path traced parameters
            path_color=YELLOW,
            path_width=4,
            path_opacity=1,
            **kwargs):
        super().__init__(**kwargs)
        complex_points = np.array([
            complex(*path.point_from_proportion(alpha)[:2])
            for alpha in np.arange(0, 1, 1 / num_coefs)
        ])
        raw_vmob_from_complex = create_vmob_from_complex_numbers(complex_points)
        # normalize
        self.complex_points = (complex_points - np.mean(complex_points)) / np.max(abs(complex_points)) * scale_factor
        normalized_vmob_from_complex = create_vmob_from_complex_numbers(self.complex_points)
        path_scale  = raw_vmob_from_complex.height / normalized_vmob_from_complex.height
        path_center = normalized_vmob_from_complex.get_center()
        self.K = num_coefs 
        self.speed_factor = .1 * speed_factor * self.K
        self.circles = VGroup()
        self.vectors = VGroup()
        path.set_style(
            stroke_color=bg_shape_color,
            stroke_width=bg_shape_stroke_width,
            stroke_opacity=bg_shape_opacity,
        )
        path.scale(1/path_scale).move_to(path_center)
        self.add(path)
        self.init_epicycles(
            circles_color,
            circles_width,
            circles_opacity,
            vectors_color,
            vectors_width,
            vectors_opacity
        )
        self.init_path(path_color, path_width, path_opacity)

    def init_epicycles(self, c_color, c_width, c_opacity, v_color, v_width, v_opacity):
        def create_one_epicycle(radius, angle):
            circle = Circle(
                radius=radius,
                stroke_color=c_color,
                stroke_width=c_width,
                stroke_opacity=c_opacity
            )
            vector = Arrow(
                ORIGIN, circle.get_right(),
                stroke_color=v_color,
                stroke_width=v_width,
                stroke_opacity=v_opacity,
                buff=0,
            )
            return VDict([("circle", circle), ("vector", vector)]).rotate(angle)

        fft = np.fft.fft(self.complex_points) / self.K
        self.epicycles = VGroup(VDict([("vector", Dot(radius=0))]))
        for i, k in enumerate([int(i / 2) * (-1) ** i for i in range(1, self.K + 1)]):
            epicycle = create_one_epicycle(radius=abs(fft[k]), angle=np.angle(fft[k]))
            epicycle.previous = self.epicycles[i]["vector"].get_end
            speed = TAU * k / self.K
            epicycle.move_to(epicycle.previous())
            epicycle.add_updater(
                lambda e, dt, s=speed: e.move_to(e.previous()).rotate(s * dt * self.speed_factor)
            )
            self.epicycles.add(epicycle)
            self.circles.add(epicycle["circle"])
            self.vectors.add(epicycle["vector"])
        self.add(self.epicycles)
        return self

    def init_path(self, color, width, opacity):
        self.trace = TracedPath(
            self.epicycles[-1]["vector"].get_end,
            stroke_color=color,
            stroke_width=width,
            stroke_opacity=opacity
        )
        self.add(self.trace)
        return self


class FOURIER_DRAW_FFT(Scene):
    def construct(self):
        tex = "$\\pi$" # <== Change this

        def get_shape(tex):
            path = VMobject()
            shape = Tex(tex)
            for sp in shape.family_members_with_points():
                path.append_points(sp.get_all_points())
            return path
        path = get_shape(tex)

        # create my epicycles
        fft_mob = FourierEpicyclesMobjectFFT(
            path,
            num_coefs=200, # The resolution increases with the fps
            speed_factor=1,
            circles_color=BLUE,
            circles_opacity=1,
        )
        self.add(fft_mob)
        self.wait(2 * TAU)
