export default function FooterBtn(props:{title:string}){
    return(
        <>
        <footer className="footer-login-sumit">
        <button type="submit">{props.title}</button>
      </footer>
        </>
    )
}