// import React and Material UI components
import React, { useState } from "react";
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { createJob } from "../firebase";

const JobForm = () => {
  const [job, setJob] = useState({
    jobType: "freelance",
    title: "",
    description: "",
    skills: "",
    projectLength: "",
    min: "",
    max: "",
    workingHours: "",
    experienceIn: "",
    experienceFor: "",
  });

  const [jobType, setJobType] = useState("freelance");

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await createJob(job);

      setJob({
        jobType: "freelance",
        title: "",
        description: "",
        skills: "",
        projectLength: "",
        min: "",
        max: "",
        workingHours: "",
        experienceIn: "",
        experienceFor: "",
      });
      alert("Job posted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container display="flex" flexDirection="center">
      <Typography
        variant="h6"
        align="center"
        sx={{
          m: 2,
          width: "100%",
          textDecoration: "underline",
          textUnderlineOffset: "0.25em",
        }}
      >
        New Job
      </Typography>

      <Typography display="flex" flexDirection="row">
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Job Type: </FormLabel>
          <RadioGroup
            name="jobType"
            value={jobType}
            onChange={handleJobTypeChange}
          >
            <FormControlLabel
              value="freelance"
              control={<Radio />}
              label="Freelance"
            />
            <FormControlLabel
              value="employment"
              control={<Radio />}
              label="Employment"
            />
          </RadioGroup>
        </FormControl>
      </Typography>

      <Typography
        variant="h6"
        component="h2"
        align="center"
        sx={{
          margin: 2,
          width: "100%",
          textDecoration: "underline",
          textUnderlineOffset: "0.25em",
        }}
      >
        Describe Your Job
      </Typography>
      <Typography display="flex" flexDirection="column">
        <TextField
          label="Title/Position"
          sx={{ mb: 2 }}
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <TextField
          label="Job description"
          multiline
          rows={4}
          sx={{ mb: 2 }}
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        />
        <TextField
          label="Skills"
          sx={{ mb: 2 }}
          value={job.skills}
          onChange={(e) => setJob({ ...job, skills: e.target.value })}
        />
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        align="center"
        sx={{
          margin: 2,
          width: "100%",
          textDecoration: "underline",
          textUnderlineOffset: "0.25em",
        }}
      >
        Project Conditions
      </Typography>

      <TextField
        label="Project length"
        fullWidth
        sx={{ mb: 2 }}
        value={job.projectLength}
        onChange={(e) => setJob({ ...job, projectLength: e.target.value })}
      />
      <Typography display="flex" flexDirection="column">
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Min"
                fullWidth
                sx={{ mb: 2 }}
                value={job.min}
                onChange={(e) => setJob({ ...job, min: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Max"
                fullWidth
                sx={{ mb: 2 }}
                value={job.max}
                onChange={(e) => setJob({ ...job, max: e.target.value })}
              />
            </Grid>
          </Grid>
        </Grid>
        <TextField
          label="Worling hours"
          fullWidth
          sx={{ mb: 2 }}
          value={job.workingHours}
          onChange={(e) => setJob({ ...job, workingHours: e.target.value })}
        />
      </Typography>

      {jobType === "employment" && (
        <div>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            sx={{
              margin: 2,
              width: "100%",
              textDecoration: "underline",
              textUnderlineOffset: "0.25em",
            }}
          >
            Experience
          </Typography>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Experience in"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={job.experienceIn}
                  onChange={(e) =>
                    setJob({ ...job, experienceIn: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="For at least"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={job.experienceFor}
                  onChange={(e) =>
                    setJob({ ...job, experienceFor: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          mx: "auto",
          display: "block",
          mb: 2,
          mt: 2,
          width: "25%",
        }}
        onClick={handleSubmit}
      >
        Post
      </Button>
    </Container>
  );
};

export default JobForm;
