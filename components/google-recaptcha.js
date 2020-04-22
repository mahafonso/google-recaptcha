import Head from 'next/head';
import { Component } from 'react';

import './googeRecaptcha.scss';

// interface Props {
//     showButton: any
// };

class GoogleRecaptcha extends Component {
    // constructor(props: Props) {
    //     super(props);
    // }

    loadRecaptcha = () => {
        grecaptcha.render('form-recaptcha', {
            'sitekey': '6LcH0-wUAAAAAK1AC3awIRgj4GBuIU03THxGywfJ',
            'callback': this.getRecaptcha
        });
    }

    getRecaptcha = () => {
        this.props.showButton(true);
    }

    componentDidMount() {
        this.loadRecaptcha();
    }
   
    render() {

        return (
            <>
                <Head>
                    <script src="https://www.google.com/recaptcha/api.js?render=explicit"></script>
                </Head>
        
                <div id="form-recaptcha" className="g-recaptcha" data-sitekey="6LcH0-wUAAAAAK1AC3awIRgj4GBuIU03THxGywfJ" data-callback="formSubmit" />
            </>
        )
    }
}

export default GoogleRecaptcha