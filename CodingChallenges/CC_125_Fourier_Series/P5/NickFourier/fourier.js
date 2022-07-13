//https://en.wikipedia.org/wiki/Discrete_Fourier_transform#Definition
//https://youtu.be/MY4luNgGfms?t=992

function dft(x) {
  let X = [];
  const N = x.length;
  for (let k = 0; k < N; k++) {
    let re = 0;
    let im = 0;
    for (let n = 0; n < N; n++) {
      let phi = (TWO_PI * k * n) / N;
      re += x[n] * cos(phi);
      im -= x[n] * sin(phi);
    }
    // the below is not in the formula but he says 
    // we typically you average the contribution
    re = re / N;
    im = im / N;


    //     For a circular epicycle, we need
    // * amplitude - the radius of that circle. 
    // * frequency - how many cycles through the circle does it rotate per unit of time
    // * Phase- another way is think of it as an offset: Where does the cycle begin? Where does that circular wave pattern begin?

    // The secret lies in the idea that a complex number a + bi is like a vector
    // the length of vector = amplitude = radius
    // the angle of the vector is the phase.  

    let freq = k; // this is k in the formula from wikipedia
    let amp = sqrt(re * re + im * im); // magnitude of the vector
    let phase = atan2(im, re);

    //use enhanced object literals 
    X[k] = { re, im, freq, amp, phase };
  }

  return X;
}