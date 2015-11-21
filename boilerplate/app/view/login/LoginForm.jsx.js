import React from 'react';
export default function(state, classes, i18n) {

    return (
        <div className="container-fluid">
            <div className="row-fluid">
                <div className="col-xs-2 col-sm-3 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">

                    {/* Example of JSS classes in use */}
                    <div className={classes.loginBoxShadow}>

                        <header className="login-header">
                            <h3>{i18n.FormTitle}</h3>
                        </header>

                        {/* Example of SASS/CSS classes in use */}
                        <div className="login-box-inner">
                            <form onSubmit={this.onSubmitLoginForm} role="form" action="#">
                                <div className="form-group">
                                    <input id="email" onChange={this.onEmailChange} className="form-control" type="text" placeholder={i18n['Email address']} value={state.login} />
                                </div>
                                <div className="form-group">
                                    <input type="password" onChange={this.onPasswordChange} className="form-control" placeholder={i18n['Password']} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">{i18n['Login']}</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <div className="col-xs-2 col-sm-3 col-md-3 col-lg-3">
                </div>
            </div>
        </div>
    )
};