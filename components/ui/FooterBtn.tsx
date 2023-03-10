
export interface ChildProps {
  title: String,
  isClick?: Boolean,
  setIsClick?: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function FooterBtn({title, isClick, setIsClick}:ChildProps){
    
    const handleClick = () => {
      setIsClick && setIsClick(true)
      console.log("option")
    }

    return(
        <>
        <footer className="footer-login-sumit">
        <button type="submit" onClick={handleClick}>{title}</button>
        </footer>
        </>
    )
}