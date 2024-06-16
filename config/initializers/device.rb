Devise.setup do |config|
    config.omniauth :google_oauth2, "1035285950049-44tjf05uf5dk9m2psancskp7qbccs0rr.apps.googleusercontent.com", "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", {
      scope: 'userinfo.email, userinfo.profile',
      prompt: 'select_account'
    }
  end