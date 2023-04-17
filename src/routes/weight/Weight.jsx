import './Weight.css'

export const Weight = () => {

  const updateResults = ()=>  {

    const inputEl = document.getElementById("input");
    const errorEl = document.getElementById("error");
    const resultEl = document.getElementById("result");
    let errorTime;
    let resultTime;

    if (inputEl.value <= 0 || isNaN(inputEl.value)) {
      errorEl.innerText = "Please enter a valid number!";
      clearTimeout(errorTime);
      errorTime = setTimeout(() => {
        errorEl.innerText = "";
        inputEl.value = "";
      }, 2000);
    } else {
      resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);
      clearTimeout(resultTime);
      resultTime = setTimeout(() => {
        resultEl.innerText = "";
        inputEl.value = "";
      }, 10000);
    }
  }

  return (
    <div className='weight_container'>
      <div class="container">
          <h2 class="heading">Weight Converter</h2>
          <h2>lbs ➡️ kg</h2>
          <div class="input_container">
              <input onChange={updateResults} type="number" id="input" class="input" step=".1" placeholder="Enter weight (lbs)" />
          </div>
          <p className='weight_kg'> You are (<span id="result"></span>) kg</p>
          <p className="error" id="error"></p>
      </div>
    </div>
  );
};