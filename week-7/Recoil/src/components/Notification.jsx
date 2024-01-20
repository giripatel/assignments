import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
// import {networkAtom, jobsAtom, messageAtom, notificationAtom, totalNotificationsAtom} from '../atoms/atoms'
import {notificationAtom,allNotificationsSelector} from '../atoms/atoms'

const Notification = () => {
   
    /*
    // useRecoilValue hook just returns the value of the atom 
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const messageCount = useRecoilValue(messageAtom)
    const notificationCount = useRecoilValue(notificationAtom)
    // useSetRecoilState hook returns a function of an atom to update
    const setMessageCount = useSetRecoilState(messageAtom) 
    // useRecoilState hook returns both the state and function to update the state
    const [jobs,setJobs] = useRecoilState(jobsAtom)
    const totalNotificationCount = useRecoilValue(totalNotificationsAtom)
        */

    const notifications = useRecoilValue(notificationAtom)
    const allNotificationsCount = useRecoilState(allNotificationsSelector)
    return(
    <>
      <button>Homme</button>
      
      <button>Network {notifications.network}</button>
      <button>Jobs {notifications.jobs}</button>
      <button>Message {notifications.notifications}</button>
      <button>Notifiacation {notifications.messaging}</button>

      <button>Me {allNotificationsCount}</button>
    </>
    )
}

export default Notification;