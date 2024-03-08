import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template', () => {
    it('emailTemplate should  contain a greeting', () => {
        expect(emailTemplate).toContain('Hola,')
    })

    test( 'emailTemplate should contain {{name}}', ()=>{
        expect(emailTemplate).toMatch(/{{name}}/)
        expect(emailTemplate).toContain('{{name}}')
    })
})