

function TechnologyLogo(props) {
    const { technology } = props
    const dim = "40"
    let href, src, alt
    switch (technology) {
        case "javascript":
            [href, src, alt] = ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", "javascript"]
            break;
        case "typescript":
            [href, src, alt] = ["https://www.typescriptlang.org/", "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", "typescript"]
            break;
        case "ruby":
            [href, src, alt] = ["https://www.ruby-lang.org/en/", "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg", "ruby"]
            break;
        case "python":
            [href, src, alt] = ["https://www.python.org", "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", "python"]
            break;
        case "css":
            [href, src, alt] = ["https://www.w3schools.com/css/", "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", "css3"]
            break;
        case "tailwind":
            [href, src, alt] = ["https://tailwindcss.com/", "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", "tailwind"]
            break;
        case "html":
            [href, src, alt] = ["https://www.w3.org/html/", "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", "html5"]
            break;
        case "react":
            [href, src, alt] = ["https://reactjs.org/", "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", "react"]
            break;
        case "node":
            [href, src, alt] = ["https://nodejs.org", "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", "nodejs"]
            break;
        case "rubyonrails":
            [href, src, alt] = ["https://rubyonrails.org", "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg", "rails"]
            break;
        case "flask":
            [href, src, alt] = ["https://flask.palletsprojects.com/", "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg", "flask"]
            break;
        case "postgresql":
            [href, src, alt] = ["https://www.postgresql.org", "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg", "postgresql"]
            break;
        case "firebase":
            [href, src, alt] = ["https://firebase.google.com/", "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", "firebase"]
            break;
        case "mongodb":
            [href, src, alt] = ["https://www.mongodb.com/", "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", "mongodb"]
            break;
        case "git":
            [href, src, alt] = ["https://git-scm.com/", "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", "git"]
            break;
        case "postman":
            [href, src, alt] = ["https://postman.com", "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", "postman"]
            break;
        case "jest":
            [href, src, alt] = ["https://jestjs.io", "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg", "jest"]
            break;
        case "matlab":
            [href, src, alt] = ["https://www.mathworks.com/", "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", "matlab"]
            break;
        case "express":
            [href, src, alt] = ["https://expressjs.com", "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", "express"]
            break;
        case "rspec":
            [href, src, alt] = ["https://rspec.info/", "./technologyPhotos/rspec-logo.png", "rspec"]
            break;
        case "webpack":
            [href, src, alt] = ["https://webpack.js.org", "https://webpack.js.org/icon-square-small.9e8aff7a67a5dd20.svg", "webpack"]
            break;
        default:
            [href, src, alt] = ["https://www.w3.org/html/", "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", "html5"]
            break;
    }
    return <a href={href} target="_blank" rel="noreferrer"> <img src={src} alt={alt} width={dim} height={dim} /> </a>

}

export default TechnologyLogo

