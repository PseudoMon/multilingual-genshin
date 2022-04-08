export default function Index() {
  return (
    <main className="homepage">
      <div className="text">
        <h1>Welcome to Multilingual Genshin Database</h1>
        <p>This site is a database for <em>text-based</em> data for Genshin Impact where you can easily switch between all the officially-supported languages of the game. We hope this website can be useful for lore-hunters, language-learners, and those interested in video game localization alike!</p>
        <p>If you're looking for a database focused on stats or other gameplay features, check out <a href="https://paimon.moe">Paimon.moe</a> instead!</p> 
        <p>This is a sister-site to <a href="https://pradewata.netlify.app">Pradewata</a>, a project aiming to retranslate Genshin Impact into Indonesian that retains personality from the source text.  </p>
        <p>All text data in this website are taken from <a href="https://github.com/Dimbreath/GenshinData">Dimbreath's repository</a>, which contain data from the live version of Genshin Impact. Images come from various sources. Feel free to peruse the source code <a href="https://github.com/PseudoMon/multilingual-genshin/">on GitHub</a>.</p>
      </div>

      <div>
        <div className="text">
          <h2>WIP</h2>
          <p>This site is currently still a <strong>work in progress</strong>! At the moment we have <strong>Voice Overs</strong>, <strong>Stories</strong>, and <strong>Talents</strong> from every character's profile and effects/description/lore for every <strong>Artifacts</strong>. Next on the plan is Weapon stories.</p>
          <p>Feel free to spread the word about this site. Also maybe follow the developer at <a href="https://twitter.com/PseudoMonious">@PseudoMonious</a> and drop a comment or two. Always nice to hear something I made isn't just useful for myself.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <img src="/images/rexincognito.webp"/>
          <img src="/images/choukenshinkageuchi.webp"/>
        </div>
      </div>
    </main>
  )
}