# Student Task & Assignment Manager
## Week 6 Maintenance and Security Documentation

### 1. Maintenance Strategy

Maintenance is required to keep the application available, secure, and compatible with updated software.

The maintenance strategy for this project consists of:

- Application monitoring
- Error and deployment log checking
- Dependency updates
- Security review
- Database maintenance
- Environment variable management
- Backup and recovery planning
- Regression testing after changes
- Version control and rollback procedures

---

## 2. Application Monitoring

The deployed backend provides a health endpoint:

`https://student-task-assignment-api.onrender.com/health`

The endpoint can be used to confirm that the API service is running.

Expected response:

```json
{
  "status": "ok",
  "service": "Student Task & Assignment Manager API"
}
