git log --shortstat --author="usymmij@gmail.com" | grep -E "fil(e|es) changed" | \
awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed: ", files, "lines inserted: ", inserted, "lines deleted: ", deleted }'

git log --shortstat --author="nbissett@uwo.ca" | grep -E "fil(e|es) changed" | \
awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed: ", files, "lines inserted: ", inserted, "lines deleted: ", deleted }'

git log --shortstat --author="lblommes@uwo.ca" | grep -E "fil(e|es) changed" | \
awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed: ", files, "lines inserted: ", inserted, "lines deleted: ", deleted }'

git log --shortstat --author="lcarte45@uwo.ca" | grep -E "fil(e|es) changed" | \
awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed: ", files, "lines inserted: ", inserted, "lines deleted: ", deleted }'

git log --shortstat --author="kwan" | grep -E "fil(e|es) changed" | \
awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed: ", files, "lines inserted: ", inserted, "lines deleted: ", deleted }'
