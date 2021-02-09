import { videos } from '../db';
import routes from '../routes';

// 메인
export const home = (req, res) => {
    res.render('home', { pageTitle: 'Home', videos });
};

// 검색
export const search = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req; // const searchingBy = req.query.term 
    res.render('search', { pageTitle: 'Search', searchingBy, videos});
};

// 업로드
export const getUpload = (req, res) => res.render('upload', { pageTitle: 'Upload'});

export const postUpload = (req, res) => {
    const {
        body: {file, title, description}
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(324393))
}

// 비디오 상세
export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail'});

// 비디오 수정
export const editVideo = (req, res) => res.render('editVideo', { pageTitle: 'Edit Video'});

// 비디오 삭제
export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video'});
