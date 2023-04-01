import React,{useState,useEffect} from "react";
import Rightarrow from "@/components/ui/Rightarrow";
import { inputRegisterType } from "@/types/UserRequest/Request";
interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function Step03({ inputData, setInputData }: ChildProps) {
  const BaseUrl = process.env.baseApiUrl;
  const NickreExp = /^[가-힣]{2,6}$/;
  const [nickNameConfirm, setNickNameConfirm] = useState<number>(0);

  const handleNickChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!NickreExp.test(e.target.value)) {
      setNickNameConfirm(2); //닉네임 양식이 틀림
    } else {
      setNickNameConfirm(1); //닉네임 올바른거
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  useEffect(() => {

    console.log(inputData);
  }, [inputData]);

  const onehandleNickCheck = (check: boolean) => {
    setInputData({
      ...inputData,
      isNickAgree: !check,
    });
  };
  return (
    <div className="main-nick-form">
      <div className="nick-header">
        <div className="main-nick-title"></div>
        <h1>
          닉네임을
          <br />
          입력해 주세요.
        </h1>
        <div className="nick-check-all">
          <div
            className={
              inputData.isNickAgree
                ? "select-agree-check-service"
                : "agree-check-service"
            }
            onClick={() => onehandleNickCheck(inputData.isNickAgree)}
          ></div>
          <div>선택적 개인정보 수집동의 및 이용약관</div>
          <Rightarrow/>
        </div>
      </div>
      <div className="nickgree-body">
        <div className="nickgree-body-form">
          <div className="nickgree-body-form-input">
            <div>
              <input
                type="text"
                placeholder="닉네임 (한글 6자리 이내)"
                name="userNickname"
                onChange={handleNickChange}
              />

              {nickNameConfirm === 2 && (
                <p
                  style={{ color: "red", fontSize: "10px", margin: "3px 0px" }}
                >
                  닉네임(한글 6자리 이내)
                </p>
              )}
              {nickNameConfirm === 1 && (
                <p
                  style={{ color: "grey", fontSize: "10px", margin: "3px 0px" }}
                >
                  올바른 형식입니다
                </p>
              )}
              {nickNameConfirm === 0 && (
                <p
                  style={{
                    color: "grey",
                    fontSize: "10px",
                    opacity: 0,
                    margin: "3px 0px",
                  }}
                ></p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="nick-find">
        <p>
          &bull; 매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러
          드립니다.
        </p>
      </div>
    </div>
  );
}
