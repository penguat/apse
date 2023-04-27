export default class SearchEngine {
  storedIndex: Array<string> = [];
  
  index(document: string) {
    this.storedIndex.push(document)
  }

  search(query: string): Result {
    const results = this.storedIndex.filter(element => element.includes(query));
    
    return {
      results: results,
      totalResults: results.length
    }
  }
}

type Result = {
  results: Array<string>,
  totalResults: Number
}