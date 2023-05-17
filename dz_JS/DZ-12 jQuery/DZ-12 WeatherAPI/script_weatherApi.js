$('#myForm').submit(async function (e) { 
    e.preventDefault();
    let city = $('#name').val();
    let data = await $.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=ce7785f58b6eeffb90e329e9d190b3ac`).promise();
        $('.row').append(`<div class="card border border-warning border-5 bg-primary text-white rounded-5" style="width: 18rem;">
        <img src=" https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="...">
        <div class="card-body">
          <h1 class="card-title text-center fw-weight-bold text-uppercase">${city}</h1>
          <p class="card-title">Сейчас</p>
          <h4 class="card-title">${data.list[0].dt_txt}</h4>
          <h2 class="card-title fw-weight-bold">${data.list[0].main.temp} ℃</h2>
          <h4 class="card-title"> Ветер: ${data.list[0].wind.speed} м/с</h4> 
          <hr>
        </div>
      </div>`)
      $('.row').append(`<div class="card border border-warning border-5 bg-info text-dark rounded-5" style="width: 18rem; height: 27rem;">
      <img src=" https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt="...">
      <div class="card-body">
        <p class="card-title"> Завтра </p>
        <h4 class="card-title">${data.list[6].dt_txt}</h4>
        <h2 class="card-title fw-weight-bold">${data.list[6].main.temp} ℃</h2>
      </div>
    </div>`)
    $('.row').append(`<div class="card border border-warning border-5 bg-info text-dark rounded-5" style="width: 18rem; height: 27rem; ">
      <img src=" https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png" alt="...">
      <div class="card-body">
        <p class="card-title"> Послезавтра </p>
        <h4 class="card-title">${data.list[14].dt_txt}</h4>
        <h2 class="card-title fw-weight-bold">${data.list[14].main.temp} ℃</h2>
      </div>
    </div>`)
    $('.row').append(`<div class="card border border-warning border-5 bg-info text-dark rounded-5" style="width: 18rem; height: 27rem; ">
      <img src=" https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png" alt="...">
      <div class="card-body">
          <p class="hide"> </p>
          <p class="hide"> </p>
        <h4 class="card-title">${data.list[22].dt_txt}</h4>
        <h2 class="card-title fw-weight-bold">${data.list[22].main.temp} ℃</h2>
      </div>
    </div>`)
    $('.row').append(`<div class="card border border-warning border-5 bg-info text-dark rounded-5" style="width: 18rem; height: 27rem; ">
      <img src=" https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png" alt="...">
      <div class="card-body">
        <p class="hide"> </p>
        <p class="hide"> </p>
        <h4 class="card-title">${data.list[30].dt_txt}</h4>
        <h2 class="card-title fw-weight-bold">${data.list[30].main.temp} ℃</h2>
      </div>
    </div>`)
})
