import './contact.scss';

const Contact = () => {

    return (
        <div className="contactUsContainer">
            <span className='header'>Contact on social media.</span>
            <div className="contact">
                <span className="git shadow">
                    <img width='50px' onClick={() => window.open('https://github.com/VenkatKadiveti', '__blank')} className='pointer' src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' />
                </span>
                <span className="insta shadow">
                    <img width='50px' onClick={() => window.open('https://www.instagram.com/venkatkadiveti', '__blank')} className='pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png' />
                </span>
                <span className="linkedIn shadow">
                    <img width='50px' onClick={() => window.open('www.linkedin.com/in/venkatanarayana-kadiveti', '__blank')} className='pointer' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' />
                </span>
                <span className="twitter shadow">
                    <img width='50px' onClick={() => window.open('https://twitter.com/Venkat387651191', '__blank')} className='pointer' src='https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg' />
                </span>
                <span className="gmail shadow">
                <a href="mailto:venkatkadiveti248@gmail.com">
                    <img width='50px' className='pointer' src='https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png' />
                </a>
                </span>
            </div>
        </div>
    )
}

export default Contact;