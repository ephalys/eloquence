import Layout from '../components/layout'
import ExternalLink from '/components/externalLink'

export default function Home() {
    return (
        <Layout title="Léon Tran-Van">
            <p className="text-lg">
                I’m currently working as a{' '}
                <span className="font-serif italic text-xl">
                    front-end engineer
                </span>{' '}
                at{' '}
                <ExternalLink link="https://hager.com" text="Hager" size="16" />
                a leading supplier of solutions and services for electrical
                installations.
            </p>
        </Layout>
    )
}
