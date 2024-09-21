fetch('./pages/header.html')
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


fetch('./pages/footer.html')
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


fetch('./pages/dino_redes.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('dino_cetis').innerHTML = data;

                const scripts = document.getElementById('dino_cetis').getElementsByTagName('script');
                for (let script of scripts) {
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    document.body.appendChild(newScript);
                }
            });
