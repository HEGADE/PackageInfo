<script>
    import {onMount }from "svelte"
    let option=null
    let moreOption={}
    onMount(() => {
    let stop = document.getElementById("stop");
    
    chrome.storage.local.get(["key"], function (result) {
      stop.checked = result.key?.stop || false;
      option=result?.key?.option||"nodejs";
      console.log(result?.key);

      
    });
  }); 
function check_radio() {
    var radio = document.getElementById('stop');
    if (radio.checked) {
        return true
    }
    return false
}

const check=()=>{

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { option,stop:check_radio() }, function (response) {
        console.log(response);
        option=response?.selected
        moreOption={
          option,
          stop:check_radio(),

        }
        chrome.storage.local.set({ key: moreOption }, function () {
      console.log("Value is set to " + option);
    });
      });
    });
}
</script>

<div>
<label for="stop">Stop Extension</label>
<input type="checkbox" name="stop" id="stop" on:change={check}>
</div>
<style> 
    div{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: red;
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1rem;
    }
</style>