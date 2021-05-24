exports.get404Error =  (req, res, next) => {

    //res.status(404).sendFile(path.join(__dirname, 'views', 'errorPage.html'));
    res.status(404).render('errorPage', 
    {
        docTitle: 'Page Not Found',
        path: '/404'
    });
};