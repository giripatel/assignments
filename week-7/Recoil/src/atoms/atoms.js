import {atom, selector} from 'recoil'
import axios from 'axios'

const notificationAtom = atom({
    key : 'notificationAtom',
    default : selector({
        key : 'notificationAtomSelector',
        get : async ({get}) => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data
        }
    })
})

const allNotificationsSelector = selector({
    key : 'allNotificationsSelector',
    get : ({get}) => {
        const allNotifications = get(notificationAtom)

        return allNotifications.network +
        allNotifications.jobs + 
        allNotifications.notifications +
        allNotifications.messaging
    }
})


export {
    notificationAtom,
    allNotificationsSelector
}

// Hard coded approch
/*
const  networkAtom = atom({
    key:'networkAtom',
    default: 100
})
const  jobsAtom = atom({
    key:'jobsAtom',
    default: 0
})
const  messageAtom = atom({
    key:'messageAtom',
    default: 5
})
const notificationAtom = atom({
    key:'notificationAtom',
    default: 22
})

const totalNotificationsAtom = selector({
    key : 'totalNotificationsAtom',
    get : ({get}) => {
        const networkCount = get(networkAtom)
        const jobsCount = get(jobsAtom)
        const messagesCount = get(messageAtom)
        const notificationCount = get(notificationAtom)

        return (networkCount + jobsCount + messagesCount + notificationCount)
    }
})


export {
    networkAtom,
    jobsAtom,
    messageAtom,
    notificationAtom,
    totalNotificationsAtom
} */


