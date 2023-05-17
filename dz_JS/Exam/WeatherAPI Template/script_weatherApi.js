$('#myForm').submit(async function (e) { 
    e.preventDefault();
    let city = $('#name').val();
    let data = await $.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=ce7785f58b6eeffb90e329e9d190b3ac`).promise();
      $('.container').append(`<div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-10">
        <div class="card shadow-0 border border-warning border-5 bg-primary text-white rounded-5" style="border-radius: 10px;">
        <div class="card-body p-4">

        <div class="row text-center">
          <div class="col-md-9 text-center border-end border-5 border-dark py-4"
            style="margin-top: -1.5rem; margin-bottom: -1.5rem;">
            <div class="d-flex justify-content-around mt-3">
              <p class="h1 fw-weight-bold text-uppercase">${city}</p>
              <p class="h3 mb-3"">${data.list[0].dt_txt}</p>
              <p class="h3 mb-2"">Ветер: ${data.list[0].wind.speed} м/с</p>
            </div>
            <div class="d-flex justify-content-around align-items-center py-5 my-4">
              <p class="fw-bold mb-0" style="font-size: 7rem;">${data.list[0].main.temp}°C</p>
              <div class="text-start">
                <p class="h2 mb-3">Сейчас</p>
                <img src=" https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="...">
              </div>
            </div>
            <div class="d-flex justify-content-around align-items-center mb-3">
              <div class="flex-column">
                <i class="fas fa-minus"></i>
              </div>
              <div class="flex-column border" style="border-radius: 10px; padding: .75rem">
                <p class="fs-6 mb-1"> Сейчас</p>
                <p class="fs-4 mb-0"><strong>${data.list[0].main.temp}°C</strong></p>
              </div>
              <div class="flex-column border" style="border-radius: 10px; padding: .75rem">
                <p class="fs-6 mb-1">Завтра</p>
                <p class="fs-4 mb-0"><strong>${data.list[6].main.temp}°C</strong></p>
              </div>
              <div class="flex-column border" style="border-radius: 10px; padding: .75rem">
                <p class="fs-6 mb-1">Послезавтра</p>
                <p class="fs-4 mb-0"><strong>${data.list[14].main.temp}°C</strong></p>
              </div>
              <div class="flex-column border" style="border-radius: 10px; padding: .75rem">
                <p class="fs-6 mb-0">Через 3 дня</p>
                <p class="fs-4 mb-0"><strong>${data.list[22].main.temp}°C</strong></p>
              </div>
              <div class="flex-column border" style="border-radius: 10px; padding: .75rem">
                <p class="fs-6 mb-0">Через 4 дня</p>
                <p class="fs-4 mb-0"><strong>${data.list[30].main.temp}°C</strong></p>
              </div>
              <div class="flex-column border" style="border-radius: 10px; padding: .75rem">
                <p class="fs-6 mb-0">Через 5 дней</p>
                <p class="fs-4 mb-0"><strong>${data.list[38].main.temp}°C</strong></p>
              </div>
              <div class="flex-column">
                <i class="fas fa-minus"></i>
              </div>
            </div>
          </div>
          <div class="col-md-3 text-end">
            <p class="h4 mt-3 mb-5 pb-1">Почасовой прогноз</p>
            <p class="pb-1"><span class="pe-2">${data.list[1].dt_txt}:</span> <strong>${data.list[1].main.temp}°</strong></p>
            <p class="pb-1"><span class="pe-2">${data.list[2].dt_txt}:</span> <strong>${data.list[2].main.temp}°</strong></p>
            <p class="pb-1"><span class="pe-2">${data.list[3].dt_txt}:</span> <strong>${data.list[3].main.temp}°</strong></p>
            <p class="pb-1"><span class="pe-2">${data.list[4].dt_txt}:</span> <strong>${data.list[4].main.temp}°</strong></p>
            <p class="pb-1"><span class="pe-2">${data.list[5].dt_txt}:</span> <strong>${data.list[5].main.temp}°</strong></p>
          </div>
        </div>  
        </div>
        </div>
      </div>`);
})
