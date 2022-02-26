*Next.js Snippets*

**Comands**

<code>
naf (nextjs arrow function)
export default () => {
    return (
        <div>
            CONTENT
        </div>
    );
}
</code>

<code>
nafe (nextjs normal function (export at the end))
function FileName() {
    return (
        <div>
            CONTENT
        </div>
    );
}

export default FileName;
</code>

**Nextjs snippets**

<code>
ngsspr (nextjs getServerSideProps)
 export const getServerSideProps = async (ctx) => {

    return {
        props:{
            data:null
        }
    }
}
</code>

<code>
ngspr (nextjs getStaticProps)
 export const getStaticProps = async (ctx) => {

    return {
        props:{
            data:null
        }
    }
}
</code>

<code>
ngspa (nextjs getStaticPaths)
export const getStaticPaths = async () => {

    return {
        paths:[],
        fallback:false
    }
}
</code>

<code>
ngipr (nextjs getInitialProps)
FileName.getInitialProps = async (ctx) => {

    return {
        ${3:data:null}
    }
}
</code>

**Nextjs api routes**

<code>
napi (nextjs api route)
export default (req,res) => {


}
</code>
