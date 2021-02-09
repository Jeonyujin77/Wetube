import routes from '../routes';

// 회원가입-get
export const getJoin = (req, res) => { 
    res.render('join', { pageTitle: 'Join'});
};

// 회원가입-post
export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req; // req.body 값을 가져온다

    if(password !== password2) { // 비밀번호가 다를경우
        res.status(400); // 잘못된 요청
        res.render('join', {pageTitle: 'Join'});
    } else {
        // To Do: Register User
        // To Do: Log User in
        res.redirect(routes.home);
    }

    res.render('join', { pageTitle: 'Join'});
};

// 로그인-get
export const getLogin = (req, res) => res.render('login', { pageTitle: 'Login'});

// 로그인-post
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

// 로그아웃
export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
}

// 사용자
export const users = (req, res) => res.render('users', { pageTitle: 'Users'});

// 사용자 상세
export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail'});

// 사용자 수정
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'Edit Profile'});

// 비밀번호 변경
export const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'Change Password'});