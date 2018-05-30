import React from 'react'

import { Button } from 'cozy-ui/react/Button'
import IntentOpener from 'cozy-ui/react/IntentOpener'

const Accounts = () => (
  <div>
    <h1>Accounts</h1>
    <IntentOpener
      action="CREATE"
      doctype="io.cozy.accounts"
      onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
      onDismiss={() => alert('intent has been dismissed !')}
      options={{
        slug: 'trainline'
      }}
    >
      <Button>Create account for Trainline</Button>
    </IntentOpener>
  </div>
)

export default Accounts