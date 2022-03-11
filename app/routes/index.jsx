export default function Index() {
  return (
    <main className="homepage">
      <div class="text">
        <h1>Welcome to Multilingual Genshin Database</h1>
        <p>This site is a database for <em>text-based</em> data for Genshin Impact where you can easily switch between all the officially-supported languages of the game.</p>
        <p>This site is currently still a <strong>work in progress</strong>! At the moment only <strong>Voice Overs</strong> and <strong>Stories</strong> from each character's profile is available. Next, we are planning to add all Weapon and Artifact stories.</p>
        <p>If you're looking for a database focused on stats or other gameplay features, check out <a href="https://paimon.moe">Paimon.moe</a> instead!</p> 
        <p>This is a sister-site to <a href="https://pradewata.netlify.app">Pradewata</a>, a project aiming to retranslate Genshin Impact into Indonesian that retains personality from the source text. They're both made by <a href="https://twitter.com/PseudoMonious">@PseudoMonious</a>. </p>
        <p>All text data in this website are taken from <a href="https://github.com/Dimbreath/GenshinData">Dimbreath's repository</a>, which contain data from the live version of Genshin Impact. All images came from <a href="https://genshin-impact.fandom.com">Genshin Impact Wiki on fandom</a>.</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <img src="/images/rexincognito.webp"/>
        <img src="/images/choukenshinkageuchi.webp"/>
      </div>
    </main>
  );
}
