<script>
  import { image } from "./image";
  import Option from "./s_components/Options.svelte"
</script>

<main>
  
  <h1>Weclome packageinfo</h1>
  <p>
    you just need to select the package name and regarding infomation wil be
    displayed automatically
  </p>
  <div>
    <img src={image} alt="github" />
  </div>
  <Option/>
</main>

<style global>
  :global(body) {
    background-color: #ffffff;
    width: 300px;
    height: 400px;
  }

  h1 {
    color: dodgerblue;
    margin-top: 0.4rem;
    display: block;
    text-align: center;
  }
  p {
    background: rgba(56, 153, 209, 0.3);
    padding: 1rem;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
  div {
    position: absolute;
    bottom: 1rem;
    left: 45%;
  }
  div img {
    height: 40px;
    width: 40px;
  }
</style>
