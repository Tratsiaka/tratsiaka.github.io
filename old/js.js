(function () {
    let button = document.getElementById('decrypt');

    button.addEventListener('click', snowdenDecrypt);

    function snowdenDecrypt() {
        let time = performance.now();

        let input = document.getElementById('crypted-field').value;
        let output = document.getElementById('decrypted-field');
        let speed = document.getElementById('speed-info');

        let arr = input.split('');

        // Too much code but still fast, almost like regexp =)
        function removeDuples(arr) {
            var clearedArray = [];
            var i = 0;
            while (i < arr.length) {
                if (arr[i] == arr[i + 1]) {
                    i += 2;
                } else {
                    clearedArray.push(arr[i]);
                    i++;
                }
            }
           // clearedArray = clearedArray.length ? clearedArray : arr;
            return arr.length === clearedArray.length ? clearedArray : removeDuples(clearedArray);
        }
        output.textContent = removeDuples(arr).join('');

        // Regexp is fast

        /*  do {
                len = input.length;
                input = input.replace(/([a-z])\1/gi, '');
            } while( len != input.length); 
                            
            output.textContent = input; */


        // This one is so slow!
        /* while (i < arr.length) {
            if (arr[i] == arr[i+1]){
                arr.splice(i, 1);
                arr.splice(i, 1);
                if (i!=0){
                    i--;
                }
            } else{
                i++;
            }
        } 
        output.textContent = arr.join('');
        */



        time = performance.now() - time;

        speed.textContent = input.length + ' letters took ' + time.toFixed(4) / 1000 + ' seconds to decrypt';
    }
})();