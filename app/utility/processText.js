export function processColorText(oriDesc) {
  // Some text (i.e. talent/skill description) includes formatting 
  // such as <color=#FFD780FF>.
  // This function process it to proper HTML
  let newDesc = oriDesc

  newDesc = newDesc.replace(
    /<color=#\w*>/g, 
    (match, p1, p2, p3, offset, string) => {
      const colorcode = match.match(/\w*(?=>)/)
      return `<span style="
        color: #${colorcode}; 
        font-weight: 600;
        filter: brightness(0.6) saturate(1.7);
      ">`
      // note the use of filter
      // since Genshin expect dark background, but our website uses light
      // we need to adjust the colors a bit
      // i know this won't work on older browser but like, their loss
    }
  )
  newDesc = newDesc.replace(/<\/color>/g, "</span>")
  
  return newDesc
}

export function processLoreText(oriText) {
  // All lore text has a trailing new line at the beginning and end.
  // This just get rid of those trailing new lines.
  return oriText.split("\n").slice(1,-1).join("\n") 
}