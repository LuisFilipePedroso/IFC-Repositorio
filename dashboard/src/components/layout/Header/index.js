// React & Redux
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

// Actions
import { getUserWithMorePublished } from '../../../actions/users'
import { getCourseWithMoreViews } from '../../../actions/courses'
import { getTagMoreUsedInArticles } from '../../../actions/tags'

// Components
import Alert from '../Alert'
import Spinner from '../../layout/Spinner'

// Styles
import { SearchForm, HeaderContentContainer } from './style'

// Header
const Header = () => {
  // Dispatch
  const dispatch = useDispatch()

  // History
  const history = useHistory()

  // Local state
  const [searchContent, setSearchContent] = useState('')

  // Global states
  const usersLoading = useSelector(state => state.users.loading)
  const userWithMorePublished = useSelector(state => state.users.users.userWithMorePublished)
  const coursesLoading = useSelector(state => state.courses.loading)
  const courseWithMoreViews = useSelector(state => state.courses.courses.courseWithMoreViews)
  const tagsLoading = useSelector(state => state.tags.loading)
  const tagMoreUsedInArticles = useSelector(state => state.tags.tags.tagMoreUsedInArticles)

  // Input handle
  const handleInputChange = event => setSearchContent(event.target.value)

  // Handle requests call in /dashboard
  useEffect(() => {
    if (history.location.pathname === '/dashboard') {
      dispatch(getUserWithMorePublished())
      dispatch(getCourseWithMoreViews())
      dispatch(getTagMoreUsedInArticles())
    }
  }, [history.location])

  return (
    <>
      <nav
        className="navbar navbar-top navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <div className="container-fluid">
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            Dashboard
          </Link>
          <SearchForm
            className="navbar-search navbar-search-dark form-inline d-md-flex ml-lg-auto"
            action={`/dashboard/busca/artigos/${searchContent}`}
          >
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Buscar artigos..."
                  type="text"
                  onChange={event => handleInputChange(event)}
                />
              </div>
            </div>
          </SearchForm>
        </div>
      </nav>
      <HeaderContentContainer className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <Alert />
        </div>
        {history.location.pathname === '/dashboard' && (
          <div className="container-fluid">
            <div className="header-body">
              <div className="row mb-3">
                <div className="col-xl-3 col-lg-6">
                  <div className="card card-stats mb-4 mb-xl-0">
                    <div className="card-body">
                      {coursesLoading || alert.length > 0 ? (
                        <Spinner loading={coursesLoading} size={50} />
                      ) : (
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              Curso mais visualizado
                            </h5>
                            <span className="h4 font-weight-bold mb-0">
                              {courseWithMoreViews}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                              <i className="ni ni-hat-3"></i>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="card card-stats mb-4 mb-xl-0">
                    <div className="card-body">
                      {usersLoading || alert.length > 0 ? (
                        <Spinner loading={usersLoading} size={50} />
                      ) : (
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              Usuário com mais publicações
                            </h5>
                            <span className="h4 font-weight-bold mb-0">
                              {userWithMorePublished}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                              <i className="ni ni-single-02"></i>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="card card-stats mb-4 mb-xl-0">
                    <div className="card-body">
                      {tagsLoading || alert.length > 0 ? (
                        <Spinner loading={tagsLoading} size={50} />
                      ) : (
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              Tag mais utilizada
                            </h5>
                            <span className="h4 font-weight-bold mb-0">
                              {tagMoreUsedInArticles}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-hashtag"></i>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </HeaderContentContainer>
    </>
  )
}

export default Header
