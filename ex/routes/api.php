use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware('auth:api')->get('/user-data', [UserController::class, 'getUserData']);
