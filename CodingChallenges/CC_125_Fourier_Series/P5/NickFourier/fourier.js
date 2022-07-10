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
    //use enhanced object literals 
    X[k] = { re, im };
  }

  return X;
}