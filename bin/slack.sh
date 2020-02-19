#/bin/bash

set -x

export AUTHER_LINK="http://github.com/${GITHUB_ACTOR}"
export AUTHER_ICON="http://github.com/${GITHUB_ACTOR}.png?size=32"

if [ $? -eq 0 ]; then
    export SL_COLOR="good"
    export SL_TEXT="*Success Deploy Firebase* :rocket:\n${GITHUB_REF} (${GITHUB_EVENT_NAME})\n*Repository URL*\nhttps://github.com/${GITHUB_REPOSITORY}"
    export EXIT=0
else
    export SL_COLOR="danger"
    export SL_TEXT="*Failure Deploy Firebase*\n${GITHUB_REF} (${GITHUB_EVENT_NAME})\n*Repository URL*\nhttps://github.com/${GITHUB_REPOSITORY}"
    export EXIT=1
fi

curl -X POST --data-urlencode 'payload={"username": "Firebase ('${GITHUB_REPOSITORY##*/}')", "icon_url": "'"$SLACK_ICON"'", "channel": "'"$SLACK_CHANNEL"'", "attachments": [{ "color": "'"$SL_COLOR"'", "author_name": "'"$GITHUB_ACTOR"'", "author_link": "'"$AUTHER_LINK"'", "author_icon": "'"$AUTHER_ICON"'", "text": "'"$SL_TEXT"'", "mrkdwn_in": ["text"] }] }' ${SLACK_WEBHOOK}

exit $EXIT