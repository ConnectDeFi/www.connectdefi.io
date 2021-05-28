import Page from '../components/base_page';
import Home from '../components/home';
import About from '../components/aboutus';
import Services from '../components/services';
import Framework from '../components/framework';
import Governance from '../components/governance';
import Metrics from '../components/token_metrics';
import Roadmap from '../components/roadmap';
import Contact from '../components/contact';

export default function Index() {
    return (
        <Page>
            <Home />
            <About />
            <Services />
            <Framework />
            <Governance />
            <Metrics />
            <Roadmap />
            <Contact />
        </Page>
    );
}
