import React from 'react'
import Student from './Student'
import { useSelector} from "react-redux"
export default function StudentContainer(props) {
	
	const students = useSelector(state=>state.students)
	
	
	return (
		<div>
			<h1>Student Container</h1>
			<h1>Student Container</h1>
			{students.map((student) => (
			<Student students = {students}/> 
			 ))}
		</div>
	)
}
