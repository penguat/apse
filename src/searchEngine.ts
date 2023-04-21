export default class SearchEngine {
  storedIndex: Array<string> = [];
  
  index(document: string) {
    this.storedIndex.push(document)
  }

  search(query: string): Array<string> {
    return this.storedIndex.filter(element => element.includes(query));
  }
}