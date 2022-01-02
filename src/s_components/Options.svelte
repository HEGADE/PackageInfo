<script>
  const getSelectedValue = (e) => {
    let option = e.currentTarget.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { option }, function (response) {
          console.log(response.selected)
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
