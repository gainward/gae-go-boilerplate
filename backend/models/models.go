package models

import (
  // "appengine"
  // "appengine/datastore"
)

type MyUser struct {
  Email string
  AuthDomain string
  Id string
  FederatedIdentity string
  FederatedProvider string
  OAuth2Token string
}
