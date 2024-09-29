fetch('./header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;

                const scripts = document.getElementById('header').getElementsByTagName('script');
                for (let script of scripts) {
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    document.body.appendChild(newScript);
                }
            });


fetch('./footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;

                const scripts = document.getElementById('footer').getElementsByTagName('script');
                for (let script of scripts) {
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    document.body.appendChild(newScript);
                }
            });



          
