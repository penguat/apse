/// <reference types="jest" />
import SearchEngine from "../searchEngine";

describe("SearchEngine", () => {
  it("returns a result from the index when a keyword is found in it", () => {
    const engine = new SearchEngine();
    engine.index("the quick brown fox jumps over the lazy dog");
    expect(engine.search("quick").results).toEqual(["the quick brown fox jumps over the lazy dog"]);
  })

  it("returns no results when no entry has the search term in it", () => {
    const engine = new SearchEngine();
    engine.index("the quick brown fox jumps over the lazy dog");
    expect(engine.search("Nothing").results).toEqual([]);
  })

  it("stores what it is told to index", () => { //TODO improve this name
    const engine = new SearchEngine();
    engine.index("The Owl and the Pussycat");
    expect(engine.search("Owl").results).toEqual(["The Owl and the Pussycat"]);
  })

  it("returns only the results which match", () => {
    const engine = new SearchEngine();
    engine.index("the quick brown fox jumps over the lazy dog");
    engine.index("The Owl and the Pussycat");
    expect(engine.search("Owl").results).toEqual(["The Owl and the Pussycat"]);
  })

  it("returns a results object which tells us how many results there are", () => {
    const engine = new SearchEngine();
    engine.index("the quick brown fox jumps over the lazy dog");
    engine.index("The Owl and the Pussycat");
    expect(engine.search("Owl").totalResults).toEqual(1);
  })
})

// TODO case-insensitive search?