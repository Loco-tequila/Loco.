'use strict';


{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let start_time;
  let count_stop;
  let elapsed_time = 0;
  
  function count_start() {
    const day = new Date(Date.now() - start_time + elapsed_time);
    const minutes = String(day.getMinutes()).padStart(2, '0');
    const seconds = String(day.getSeconds()).padStart(2, '0');
    const milliseconds = String(day.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${minutes}:${seconds}:${milliseconds}`
    
    count_stop = setTimeout(() => {
      count_start();
    }, 10);
  }

  function set_first() {
   start.disabled = false;
   stop.disabled = true;
   reset.disabled = true;    
  }

  function set_running() {
    start.disabled = true;
   stop.disabled = false;
   reset.disabled = false;
  }
  
  function set_stopping() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }
  
  set_first();

  start.addEventListener('click', () => {
    set_running();
    start_time = Date.now();
    count_start();
  });

  stop.addEventListener('click', () => {
    set_stopping();
    clearTimeout(count_stop);
    elapsed_time += Date.now() - start_time;
  });
  // stop.addEventListener('click', () => {
  //   clearTimeout(count_stop);
  //   console.log("now = " + Date.now());
  //   console.log("startTime = " +start_time);
  //   console.log("elapsedTime = " + elapsed_time);
  //   elapsed_time += Date.now() - start_time;
  //   console.log("elapsed_time = " + elapsed_time);
  // });

  reset.addEventListener('click', () => {
    set_first();
    clearTimeout(count_stop);
    timer.textContent = '00:00:000';
    elapsed_time = 0;
  });



  //   function count_up() {

  //     const d = new Date(Date.now() - start_time);
  //     const m = String(d.getMinutes()).padStart(2,'0');
  //     const s = String(d.getSeconds()).padStart(2,'0');
  //     const ms = String (d.getMilliseconds()).padStart(3,'0');
  //     timer.textContent = `${m}:${s}.${ms}`;

  //     timeoutId = setTimeout(() => {
  //     count_up();
  //   },100);
  // }

  //   start.addEventListener('click', () => {
  //     start_time = Date.now();
  //     count_up();
  //   });

  //   stop.addEventListener('click', () => {
  //     clearTimeout(timeoutId);
  //   });
  
}