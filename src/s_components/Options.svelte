<script>
  import { onMount } from "svelte";
  onMount(() => {
    let python = document.getElementById("python_radio");
    let nodejs = document.getElementById("node_radio");
    chrome.storage.local.get(["key"], function (result) {
      if (result?.key?.option === "python") python.checked = true;
      else nodejs.checked = true;
    });
  });

  const getSelectedValue = (e) => {
    let option = e.currentTarget.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { option }, function (response) {
        console.log(response?.selected,response?.stop);
        let moreOption = {
          option:response?.selected||option,
          stop: response?.stop,
        };
        chrome.storage.local.set({ key: moreOption }, function () {
          console.log("Value is set to " + moreOption.option);
        });
      });
    });
  };
</script>

<div>
  <label for="python_radio">python</label>
  <input
    type="radio"
    name="choice"
    id="python_radio"
    value="python"
    on:click={getSelectedValue}
  />
  <label for="node_radio">Node js</label>

  <input
    type="radio"
    name="choice"
    id="node_radio"
    value="nodejs"
    on:click={getSelectedValue}
  />
</div>

<style>
  div {
    margin-top: 30px;
    font-weight: bold;
    color: rgb(0, 162, 255);
    font-size: 18px;
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
</style>
