const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/about', (req, res) => {
    // res.send('about')
    res.sendFile(__dirname + '/about.html')
})
app.get('/contact', (req, res) => {
    // res.send('contact')
    res.sendFile(__dirname + '/contact.html')
})
app.get('/process', (req, res) => {
    var eng = parseInt(req.query.eng);
    var math = parseInt(req.query.math);
    var guj = parseInt(req.query.guj);
    var hin = parseInt(req.query.hin);
    var san = parseInt(req.query.san);
    var sum = eng + math + guj + hin + san;
    function getBorderColor(sum) {
        if (sum >= 300) {
            return '#000000';
        } else {
            return '#f44336';
        }
    }
    var htmlResponse = `
        <html>
        <head>
            <style>
                table {
                    width: 50%;
                    border:solid;
                    border-color: ${getBorderColor(sum)};
                    margin: 20px auto;
                }
                th, td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: center;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <h2>Sum of Scores</h2>
            <table>
                <tr>
                    <th>Subject</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>English</td>
                    <td>${eng}</td>
                </tr>
                <tr>
                    <td>Math</td>
                    <td>${math}</td>
                </tr>
                <tr>
                    <td>Gujarati</td>
                    <td>${guj}</td>
                </tr>
                <tr>
                    <td>Hindi</td>
                    <td>${hin}</td>
                </tr>
                <tr>
                    <td>Sanskrit</td>
                    <td>${san}</td>
                </tr>
                <tr>
                    <th>Total Sum</th>
                    <td>${sum}</td>
                </tr>
            </table>
        </body>
        </html>
    `;
    res.send(htmlResponse)

})

// app.get('/cake', (req, res) => {
//     res.send('cake')
// })
// app.get('/cake/ahmedabad', (req, res) => {
//     res.send('cake in ahmedabad')
// })
// app.get('/cake/rajkot', (req, res) => {
//     res.send('cake in rajkot')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})