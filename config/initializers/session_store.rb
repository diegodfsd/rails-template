RailsTemplate::Application.config.session_store :cookie_store, {
    key:          '_RailsTemplate_web_session',
    httponly:     true,
    secure:       Rails.env.production?,
    expire_after: 24.hours
}