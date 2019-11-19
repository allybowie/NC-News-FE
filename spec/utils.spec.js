const { createParams } = require('../src/utils')
const {expect} = require('chai')

describe('CreateParams', () => {
    it('returns and object with the keys "sort_by", "order", "topic"', () => {
        expect(createParams()).to.have.eql({})
    });
    it('returns and object with the keys "sort_by" if a sort by query is passed in', () => {
        const test = createParams("?sort_by=votes")
        expect(test).to.have.keys(["sort_by"])
    });
    it('returns and object with the keys "sort_by" if a sort by query is passed in', () => {
        const test = createParams("?sort_by=votes")
        expect(test.sort_by).to.equal("votes")
    });
    it('returns and object with the keys "sort_by" if a sort by query is passed in', () => {
        const test = createParams("?sort_by=comment_count")
        expect(test.sort_by).to.equal("comment_count")
    });
    it('returns and object with the keys "order" if an order query is passed in', () => {
        const test = createParams("?order=asc")
        expect(test.order).to.equal("asc")
        expect(test).to.have.keys(["order"])
    });
    it('returns and object with the keys "order and sort_by" when passed two queries', () => {
        const test = createParams("?order=asc&&sort_by=votes")
        expect(test.order).to.equal("asc")
        expect(test.sort_by).to.equal("votes")
        expect(test).to.have.keys(["order", "sort_by"])
    });
    it('returns and object with the keys "topic, order and sort_by" when passed three queries', () => {
        const test = createParams("?topic=coding&&order=asc&&sort_by=votes")
        expect(test.order).to.equal("asc")
        expect(test.sort_by).to.equal("votes")
        expect(test.topic).to.equal("coding")
        expect(test).to.have.keys(["order", "sort_by", "topic"])
    });
});