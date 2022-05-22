export function useMultilingualSearch() {
  return (allData, keyToSearch, valueToSearch) => {
    const target = valueToSearch.toLowerCase()

    const filteredData = allData.filter(data => {
      return Object.values(data[keyToSearch]).some(textInLang => (
        textInLang.toLowerCase().includes(target)
      ))

      return false
    })

    return filteredData
  }
}