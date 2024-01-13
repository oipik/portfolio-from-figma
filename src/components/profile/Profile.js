import profile from "../../images/profile.png"

import "./profile.scss";

const Profile = () => {
    return (
        <section className="profile">
            <img className="profile__photo" src={profile} alt="photo profile" />
            <div className="profile__wrapper"></div>
            <div className="profile__data">
                <h5 className="profile__name">Beatrice Wambui</h5>
                <p className="profile__post">FullStack Developer</p>
                <div className="profile__socials">
                    <div className="profile__social">
                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none">
                            <path d="M7.75027 12.0825H10.2308L11.2231 8.11357H7.75027V6.12912C7.75027 5.10712 7.75027 4.14467 9.73472 4.14467H11.2231V0.810787C10.8996 0.768121 9.67816 0.671875 8.38827 0.671875C5.69438 0.671875 3.78137 2.31599 3.78137 5.33534V8.11357H0.804688V12.0825H3.78137V20.5164H7.75027V12.0825Z" fill="#1877F2" />
                        </svg>
                    </div>
                    <div className="profile__social">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M3.88945 1.80688C3.88923 2.24547 3.71479 2.66601 3.40451 2.97599C3.09422 3.28596 2.67351 3.45998 2.23491 3.45976C1.79632 3.45954 1.37578 3.2851 1.06581 2.97482C0.755831 2.66453 0.581812 2.24382 0.582031 1.80523C0.582251 1.36664 0.756691 0.946095 1.06698 0.63612C1.37726 0.326144 1.79798 0.152125 2.23657 0.152344C2.67516 0.152563 3.0957 0.327003 3.40568 0.637289C3.71565 0.947575 3.88967 1.36829 3.88945 1.80688ZM3.93906 4.68434H0.631643V15.0366H3.93906V4.68434ZM9.16479 4.68434H5.8739V15.0366H9.13171V9.60412C9.13171 6.57783 13.0758 6.2967 13.0758 9.60412V15.0366H16.3419V8.4796C16.3419 3.3779 10.5043 3.56808 9.13171 6.07345L9.16479 4.68434Z" fill="#0077B5" />
                        </svg>
                    </div>
                    <div className="profile__social">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none">
                            <path d="M16.9874 2.60531C16.3564 2.88446 15.6873 3.06783 15.0021 3.14938C15.724 2.71705 16.2642 2.03705 16.5219 1.23604C15.8439 1.63954 15.1005 1.92233 14.3266 2.0753C13.8062 1.51848 13.1164 1.14919 12.3644 1.02485C11.6125 0.900507 10.8405 1.02808 10.1686 1.38773C9.49661 1.74738 8.96229 2.31896 8.64869 3.01361C8.33508 3.70825 8.25976 4.48705 8.43444 5.22892C7.05932 5.16012 5.71406 4.80287 4.48599 4.18036C3.25792 3.55785 2.17451 2.684 1.30612 1.61557C0.998769 2.14347 0.837256 2.74358 0.83812 3.35444C0.83812 4.55338 1.44917 5.61258 2.37607 6.23272C1.82705 6.21541 1.29012 6.06714 0.810007 5.80028V5.84245C0.809982 6.64108 1.0862 7.41515 1.59182 8.03334C2.09744 8.65154 2.80133 9.07582 3.5841 9.23421C3.07447 9.37247 2.54003 9.39283 2.02135 9.29374C2.24206 9.98118 2.67226 10.5824 3.25171 11.0131C3.83115 11.4438 4.53082 11.6825 5.2527 11.6958C4.53528 12.2592 3.71383 12.6757 2.83531 12.9215C1.9568 13.1672 1.03846 13.2373 0.132812 13.1279C1.71353 14.1444 3.5536 14.6841 5.43295 14.6824C11.7948 14.6824 15.2725 9.41281 15.2725 4.84278C15.2725 4.69395 15.2692 4.54346 15.2626 4.39545C15.9393 3.90625 16.5234 3.29951 16.9874 2.60531Z" fill="#1DA1F2" />
                        </svg>
                    </div>
                    <div className="profile__social">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M8.27246 0.326172C3.70408 0.326172 0.00390761 4.02635 0.00390761 8.59472C0.00291203 10.3304 0.548473 12.0224 1.5632 13.4305C2.57793 14.8387 4.01029 15.8916 5.65711 16.4399C6.07054 16.5119 6.22599 16.2638 6.22599 16.0463C6.22599 15.8504 6.21524 15.1996 6.21524 14.5067C4.13818 14.8896 3.60073 14.0007 3.43536 13.5352C3.34192 13.297 2.93924 12.5636 2.58783 12.3668C2.29843 12.2122 1.885 11.8294 2.57708 11.8195C3.22864 11.8087 3.69333 12.4189 3.84878 12.667C4.59295 13.9172 5.78114 13.5658 6.25658 13.3491C6.32935 12.8117 6.54598 12.4503 6.78412 12.2436C4.94437 12.0369 3.02193 11.3233 3.02193 8.16062C3.02193 7.261 3.34192 6.51766 3.86945 5.93804C3.78677 5.73132 3.49737 4.8838 3.95214 3.74687C3.95214 3.74687 4.64422 3.53023 6.22599 4.59522C6.8991 4.4084 7.59457 4.31438 8.29313 4.31575C8.99596 4.31575 9.69878 4.40835 10.3603 4.5944C11.942 3.51949 12.6341 3.7477 12.6341 3.7477C13.0889 4.88462 12.7995 5.73215 12.7168 5.93886C13.2435 6.51766 13.5643 7.25108 13.5643 8.16062C13.5643 11.3341 11.632 12.0369 9.79139 12.2436C10.0915 12.5016 10.3503 12.9977 10.3503 13.7733C10.3503 14.8788 10.3396 15.7677 10.3396 16.0472C10.3396 16.2638 10.495 16.5218 10.9085 16.4391C12.5496 15.8848 13.9757 14.8298 14.9859 13.4227C15.9962 12.0155 16.5398 10.327 16.5402 8.59472C16.5402 4.02635 12.84 0.326172 8.27163 0.326172H8.27246Z" fill="#0B0909" />
                        </svg>
                    </div>
                </div>
                <div className="profile__contacts">
                    <ul className="contacts__list">
                        <li className="contacts__phone">
                            <span>Phone</span><br />
                            <a className="contacts__number" href="tel:+254723909353">+254723909353</a>
                        </li>
                        <li className="contacts__email">
                            <span>Email</span><br />
                            <a className="contacts__mailto" href="mailto:mail@htmlacademy.ru">beatricewambuimbugua@gmail.com</a>
                        </li>
                        <li className="contacts__location">
                            <span>Location</span><br />
                            Nairobi, Kenya
                        </li>
                    </ul>
                    <button className="profile__resume">Download Resume</button>
                </div>
                
            </div>
        </section>
    )
}

export default Profile;