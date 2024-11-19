import React, { useState, useEffect } from 'react';
import styles from './TodoApp.module.css'

import CandidateForm from '../CandidateForm/CandidateForm'
import CandidateList from '../CandidateList/CandidateList'

const VotingApp = ({}) => {
    const [candidates, setCandidates] = useState(() => {
        const savedCandidates = localStorage.getItem('candidates');
        return savedCandidates ? JSON.parse(savedCandidates) : [];
    });

    const [filter, setFilter] = useState(() => {
        return localStorage.getItem('candidateFilter') || '';
    });

    const addCandidate = (name) => {
        const newCandidate = {
            id: Date.now(),
            name,
            quantityOfVotes: 0
        }

        setCandidates([...candidates, newCandidate])
    }

    const editTask = (candidateId) => {
        setCandidates (
            candidates.map((candidate) =>
                candidate.id === candidateId ? {...candidate, name: newName} : candidate
            )
        )
    }

    const removeCandidate = (candidateId) => {
        const updatedCandidates = candidates.filter((candidate) => candidate.id !== candidateId)
        setCandidates(updatedCandidates)
    }

    const voteInCandidate = (candidateId) =>{
        setCandidates (
            candidates.map((candidate) =>
                candidate.id === candidateId ? {...candidate, quantityOfVotes: quantityOfVotes+1} : candidate
            )
        )
    }

    const unvoteInCandidate = (candidateId) =>{
        setCandidates (
            candidates.map((candidate) =>
                candidate.id === candidateId ? {...candidate, quantityOfVotes: quantityOfVotes-1} : candidate
            )
        )
    }

    const filteredCandidates = candidates.filter((task) => {
        if (filter === 'completed') return task.completed
        if (filter === 'incompleted') return !task.completed
        return true
    })

    useEffect(() => {
        localStorage.setItem('candidates', JSON.stringify(candidates));
    }, [candidates]);

    useEffect(() => {
        localStorage.setItem('candidateFilter', filter);
    }, [filter]);

    return (
        <div>
            <div>
                <div>
                    <p className={styles.title}>App Votos</p>
                </div>
                <CandidateForm addTask={addTask} />
                <TodoFilter filter={filter} setFilter={setFilter} />
                <CandidateList 
                    key = {key}
                    candidate = {candidates}
                    addCandidate={addCandidate}
                    removeCandidate = {removeCandidate}
                    voteInCandidate = {voteInCandidate}
                    unvoteCandidate={unvoteInCandidate}
                />
            </div>
        </div>
    )
}

export default VotingApp