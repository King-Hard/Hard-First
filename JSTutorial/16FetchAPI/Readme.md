# Fetch API

Explanation:
GET, POST, PUT, and DELETE.

Yung "fetch" na function is ginagamit natin sa pagkuha ng data from the server 

example: may ife-fetch tayong url na may mga lamang data, ngayon para magawa natin yon need lang natin gumawa ng 
1, word na fetch and then parenthesis
2, sa loob ng parenthesis lalagay lang natin yung url na may lamang mga data na gusto natin makuha
3, using .then and .catch para 
4, .then(response => response.json()) - need lang muna natin sya i-convert into json para lahat ng folder or data sa loob ng url na yon is magigigng json format sya
5, .then(data => console.log(data)) - then after natin ma transfer into json bawat folder or data na nasa loob ng url natin gagawin naman natin to, ibahin lang natin yung variable na gagamitin natin para sa pang select ng mga folder. Like sa bawat folder sa loob ng finetch natin is magco-console.log()
6, .catch(err => `Error: ${err}`) - dito naman sakaling may maging problem sa pagkuha natin ng mga folder or data sa loob ng url natin, heto yung magru-run para lang may indicator tayo na hindi natin na kuha or may naging problema sa pagkuha ng mga folder or ng data.

Example:

// assume natin na may laman yung url na mga data
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => `Error: ${err}`)

    1st .then, makikita natin yung laman daw na mga data sa loob ng url natin is pinangalanan muna natin as response then yung response na yon sya ngayon may hawak sa lahat ng data ngayon ico-convert lang natin sya into json response.json()

    2nd .then,  makikita natin dito na data naman yung ginamit natin since nakuha na natin yung mga data using nung sa response trinansfer na natin sya into json, gagawin na lang natin since hawak na natin yung mga folder or data sa url natin gumawa lang ng new .then para makuha mga data .then(data => cosnole.lo(data))

    3, .catch - indicator na may error sa pagkuha natin ng data sa url.





