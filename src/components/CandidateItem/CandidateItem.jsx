import React, { useState } from 'react';
import styles from './CandidateItem.module.css'

const CandidateItem = ({key, candidate, addCandidate, removeCandidate, voteInCandidate, unvoteInCandidate }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newCandidate, setNewCandidate] = useState(candidate.text)

    const handleEdit = () => {
        setIsEditing(true);
        setNewCandidate(candidate.text, newCandidate);
        setIsEditing(true)
    }

    const handleSave = () => {
        addCandidate(newCandidate)
        setIsEditing(false)
    }

    const handleVote = () => {
        voteInCandidate(candidate)
    }
    const handleUnvote = () => {
        unvoteInCandidate(candidate)
    }

    const handleRemove = () => {
        removeCandidate(task.id)
    }
    return (
        <div>

        
        </div>
    )
}

export default CandidateItem